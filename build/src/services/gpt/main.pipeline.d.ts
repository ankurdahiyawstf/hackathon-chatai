declare class MainPipeline {
    static systemMessage: string;
    static functions: ({
        name: string;
        description: string;
        parameters: {
            type: string;
            properties: {
                tokenA: {
                    type: string;
                    description: string;
                };
                tokenB: {
                    type: string;
                    description: string;
                };
                amountA: {
                    type: string;
                    description: string;
                };
                amountB: {
                    type: string;
                    description: string;
                };
                chain: {
                    type: string;
                    description: string;
                };
                liquidityAmount?: undefined;
                name?: undefined;
                symbol?: undefined;
                initialSupply?: undefined;
                decimal?: undefined;
                tokenIn?: undefined;
                tokenOut?: undefined;
                recipient?: undefined;
                token?: undefined;
                amountIn?: undefined;
                destChainId?: undefined;
                destToken?: undefined;
            };
            required: string[];
        };
    } | {
        name: string;
        description: string;
        parameters: {
            type: string;
            properties: {
                liquidityAmount: {
                    type: string;
                    description: string;
                };
                tokenA: {
                    type: string;
                    description: string;
                };
                tokenB: {
                    type: string;
                    description: string;
                };
                chain: {
                    type: string;
                    description: string;
                };
                amountA?: undefined;
                amountB?: undefined;
                name?: undefined;
                symbol?: undefined;
                initialSupply?: undefined;
                decimal?: undefined;
                tokenIn?: undefined;
                tokenOut?: undefined;
                recipient?: undefined;
                token?: undefined;
                amountIn?: undefined;
                destChainId?: undefined;
                destToken?: undefined;
            };
            required: string[];
        };
    } | {
        name: string;
        description: string;
        parameters: {
            type: string;
            properties: {
                name: {
                    type: string;
                    description: string;
                };
                symbol: {
                    type: string;
                    description: string;
                };
                initialSupply: {
                    type: string;
                    description: string;
                };
                decimal: {
                    type: string;
                    description: string;
                };
                chain: {
                    type: string;
                    description: string;
                };
                tokenA?: undefined;
                tokenB?: undefined;
                amountA?: undefined;
                amountB?: undefined;
                liquidityAmount?: undefined;
                tokenIn?: undefined;
                tokenOut?: undefined;
                recipient?: undefined;
                token?: undefined;
                amountIn?: undefined;
                destChainId?: undefined;
                destToken?: undefined;
            };
            required: string[];
        };
    } | {
        name: string;
        description: string;
        parameters: {
            type: string;
            properties: {
                tokenIn: {
                    type: string;
                    description: string;
                };
                tokenOut: {
                    type: string;
                    description: string;
                };
                recipient: {
                    type: string;
                    description: string;
                };
                chain: {
                    type: string;
                    description: string;
                };
                tokenA?: undefined;
                tokenB?: undefined;
                amountA?: undefined;
                amountB?: undefined;
                liquidityAmount?: undefined;
                name?: undefined;
                symbol?: undefined;
                initialSupply?: undefined;
                decimal?: undefined;
                token?: undefined;
                amountIn?: undefined;
                destChainId?: undefined;
                destToken?: undefined;
            };
            required: string[];
        };
    } | {
        name: string;
        description: string;
        parameters: {
            type: string;
            properties: {
                token: {
                    type: string;
                    description: string;
                };
                amountIn: {
                    type: string;
                    description: string;
                };
                destChainId: {
                    type: string;
                    description: string;
                };
                destToken: {
                    type: string;
                    description: string;
                };
                chain: {
                    type: string;
                    description: string;
                };
                tokenA?: undefined;
                tokenB?: undefined;
                amountA?: undefined;
                amountB?: undefined;
                liquidityAmount?: undefined;
                name?: undefined;
                symbol?: undefined;
                initialSupply?: undefined;
                decimal?: undefined;
                tokenIn?: undefined;
                tokenOut?: undefined;
                recipient?: undefined;
            };
            required: string[];
        };
    })[];
}
export { MainPipeline };
//# sourceMappingURL=main.pipeline.d.ts.map