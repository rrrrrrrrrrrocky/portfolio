"use client";

import { create } from "zustand";
import { combine } from "zustand/middleware";

// import { InternalDto } from "@/script/dto/internal-dto/internal-dto";

export type PortfolioState = {
  // initialPortfolios: InternalDto.Response._GetPortfolios;
  // portfolios: InternalDto.Response._GetPortfolios;
  initialPortfolios: Array<unknown>;
  portfolios: Array<unknown>;
};

const initialState: PortfolioState = {
  initialPortfolios: [],
  portfolios: [],
};

export const usePortfolioStore = create(
  combine(initialState, (set) => {
    return {
      setInitialPortfolios: (
        setState:
          | PortfolioState["initialPortfolios"]
          | ((
              setState: PortfolioState["initialPortfolios"]
            ) => PortfolioState["initialPortfolios"])
      ) => {
        set((state: PortfolioState) => ({
          initialPortfolios:
            typeof setState === "function"
              ? setState(state.initialPortfolios)
              : setState,
        }));
      },
      setPortfolios: (
        setState:
          | PortfolioState["portfolios"]
          | ((
              setState: PortfolioState["portfolios"]
            ) => PortfolioState["portfolios"])
      ) => {
        set((state: PortfolioState) => ({
          portfolios:
            typeof setState === "function"
              ? setState(state.portfolios)
              : setState,
        }));
      },
      resetGameStoreState: (stateKey: keyof PortfolioState) => {
        set(() => ({
          [stateKey]: initialState[stateKey],
        }));
      },
      resetAllState: () => {
        set(() => initialState);
      },
    };
  })
);
