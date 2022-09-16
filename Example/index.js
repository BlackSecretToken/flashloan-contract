
import { FlashLoanAggregator } from './abi'

import { Wallet } from '@ethersproject/wallet'
import {
  TransactionReceipt,
  TransactionResponse,
  WebSocketProvider,
} from '@ethersproject/providers'
import { formatEther, formatUnits, parseEther } from '@ethersproject/units'

const app = Sever()
let botinterval

const startBot = async () => {
    await FlashLoanContract.flashloan(
        _asset,  //base token address
        _router1, // best sell router address
        _router2, // best buy router address
        parseEther(_amount.toString()), // _amount of base token asset which borrow from lending pool.
        _targetToken, // target token address
        "0x2DA7A4736dC105335adb87AC4365e55D4e8489b1"
    )
}

