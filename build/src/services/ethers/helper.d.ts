import { ethers } from "ethers";
import { ContractTypes } from "../../types/enums";
export default class Helpers {
    static getInstance: (chainId: string, contractType: ContractTypes) => Promise<ethers.Contract>;
}
//# sourceMappingURL=helper.d.ts.map