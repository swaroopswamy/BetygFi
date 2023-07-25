import React from "react";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import "regenerator-runtime/runtime";


export const supportedChainIds = [1, 3, 4, 5, 42, 1337, 43114];

export const connectors = {
    injected: {},
};

export function Web3Provider({ children }) {
    return (
        <ThirdwebWeb3Provider
            supportedChainIds={supportedChainIds}
            connectors={connectors}
        >
            {children}

        </ThirdwebWeb3Provider>
    )
};
