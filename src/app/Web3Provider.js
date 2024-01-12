"use client";
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { http, createConfig } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { metaMask, } from 'wagmi/connectors';

export const config = createConfig({
	chains: [mainnet, sepolia],
	connectors: [
		metaMask(),
	],
	transports: {
		[mainnet.id]: http(),
		[sepolia.id]: http(),
	},
});

export const Web3Provider = ({ children }) => {
	const queryClient = new QueryClient();
	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		</WagmiProvider>
	);
};