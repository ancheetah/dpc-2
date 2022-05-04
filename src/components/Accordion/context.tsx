import React, { useReducer, useContext, createContext } from 'react';

type AccordionState = {
   show: boolean;
};

const toggleShowType = 'TOGGLE_SHOW';

type AccordionActionType = { type: string; payload: { value: boolean } };

export const AccordionActions = {
   toggleShow: toggleShowType,
};

type AccordionDispatch = (action: AccordionActionType) => void;

const AccordionStateContext = createContext<AccordionState | undefined>(undefined);
const AccordionDispatchContext = createContext<AccordionDispatch | undefined>(undefined);

const accordionState: AccordionState = {
   show: true,
};

const accordionReducer = (state: AccordionState, action: AccordionActionType) => {
   if (action.type === AccordionActions.toggleShow) {
      return { ...state, show: action.payload.value };
   }
   return state;
};

const AccordionContextProvider: React.FC = props => {
   const { children } = props;
   const [state, dispatch] = useReducer(accordionReducer, accordionState);
   return (
      <AccordionStateContext.Provider value={state}>
         <AccordionDispatchContext.Provider value={dispatch}>{children}</AccordionDispatchContext.Provider>
      </AccordionStateContext.Provider>
   );
};

const useAccordionState = () => {
   const context = useContext(AccordionStateContext);
   if (context === undefined) {
      throw new Error('useAccordionState must be used within a AccordionStateContext Provider');
   }
   return context;
};

const useAccordionDispatch = () => {
   const context = useContext(AccordionDispatchContext);
   if (context === undefined) {
      throw new Error('useAccordionDispatch must be used within a AccordionDispatchContext Provider');
   }
   return context;
};

const useAccordion = (): [AccordionState, AccordionDispatch] => {
   return [useAccordionState(), useAccordionDispatch()];
};

export { AccordionContextProvider, useAccordionState, useAccordionDispatch, useAccordion };
