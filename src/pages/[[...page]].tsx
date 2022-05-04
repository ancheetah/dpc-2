import { useRouter } from "next/router";
import { BuilderComponent, Builder, builder } from "@builder.io/react";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import builderConfig from "@config/builder";
import { NoSSR } from "../components/NoSSR/NoSSR";
import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import "../components";

builder.init(builderConfig.apiKey);

const isDevelopment = () => {
   return process.env.NODE_ENV === "development";
};
export async function getStaticProps({
   params,
   resolvedUrl,
}: GetStaticPropsContext<{ page: string[] }> & { resolvedUrl: string }) {
   const env = isDevelopment() ? "development" : "production";

   const navigationBar =
      (await builder
         .get("navigation-bar", {
            query: {
               data: {
                  environment: env,
               },
            },
            userAttributes: {
               url: resolvedUrl,
            },
         })
         .promise()) || null;

   const page =
      (await builder
         .get("page", {
            query: {
               data: {
                  environment: env,
               },
            },
            userAttributes: {
               urlPath: `/${params?.page?.join("/") || ""}`,
            },
         })
         .toPromise()) || null;

   const footer =
      (await builder
         .get("footer", {
            query: {
               data: {
                  environment: env,
               },
            },
            userAttributes: {
               url: resolvedUrl,
            },
         })
         .promise()) || null;

   return {
      props: {
         navigationBar,
         page,
         footer,
      },
      revalidate: 5,
   };
}

export async function getStaticPaths() {
   const pages = await builder.getAll("page", {
      options: { noTargeting: true },
   });

   return {
      paths: pages.map((page) => page.data?.url.toString()),
      fallback: true,
   };
}

const Page = ({ page }: InferGetStaticPropsType<typeof getStaticProps>) => {
   const router = useRouter();
   if (router.isFallback) {
      return <h1>Loading...</h1>;
   }

   const isLive = !Builder.isEditing && !Builder.isPreviewing;

   if (!page && isLive) {
      return (
         <>
            <Head>
               <meta name="robots" content="noindex" />
               <meta name="title" />
            </Head>
            <NoSSR>
               <DefaultErrorPage statusCode={404} />
            </NoSSR>
         </>
      );
   }

   return (
      <>
         <Head>
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
         </Head>

         <BuilderComponent model="page" content={page} />
      </>
   );
};
export default Page;
