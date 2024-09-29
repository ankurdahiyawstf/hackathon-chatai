declare const _default: {
    provideLiquidity: {
        message: string;
        arguments: {
            tokenA: string;
            tokenB: string;
            amountA: string;
            amountB: string;
            chain: string;
        };
    };
    removeLiquidity: {
        message: string;
        arguments: {
            liquidityAmount: string;
            tokenA: string;
            tokenB: string;
            chain: string;
        };
    };
    deployToken: {
        message: string;
        arguments: {
            name: string;
            symbol: string;
            initialSupply: string;
            decimal: string;
            chain: string;
        };
    };
    multiHopSwap: {
        message: string;
        arguments: {
            tokenIn: string;
            tokenOut: string;
            recipient: string;
            chain: string;
        };
    };
    createPool: {
        message: string;
        arguments: {
            tokenA: string;
            tokenB: string;
            amountA: string;
            amountB: string;
            chain: string;
        };
    };
    lock: {
        message: string;
        arguments: {
            token: string;
            amountIn: string;
            destChainId: string;
            destToken: string;
            chain: string;
        };
    };
};
export default _default;
//# sourceMappingURL=messagemap.d.ts.map