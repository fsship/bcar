let ctrlStr = '0'
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    uartData = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    ctrlStr = uartData
    // basic.showString(uartData)
    // if (uartData == "A") {
    //     mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Run)
    // }
    // if (uartData == "B") {
    //     mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Back)
    // }
    // if (uartData == "C") {
    //     mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_SpinLeft)
    // }
    // if (uartData == "D") {
    //     mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_SpinRight)
    // }
    // if (uartData == "0") {
    //     mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Stop)
    // }
})
let uartData = ""
// basic.showString("S")
basic.showIcon(IconNames.Heart)
bluetooth.setTransmitPower(7)
bluetooth.startUartService()
basic.forever(function () {
    if (ctrlStr == "A") {
        mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Run)
    }
    if (ctrlStr == "B") {
        mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Back)
    }
    if (ctrlStr == "C") {
        mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_SpinLeft)
    }
    if (ctrlStr == "D") {
        mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_SpinRight)
    }
    if (ctrlStr == "0") {
        mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Stop)
    }
})
