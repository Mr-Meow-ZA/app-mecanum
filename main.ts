bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Comma), function () {
    rx1 = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    rx2 = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Comma))
    temp = 1
})
let rx2 = ""
let rx1 = ""
let temp = 0
bluetooth.startUartService()
basic.showIcon(IconNames.House)
temp = 0
basic.forever(function () {
    if (temp == 1) {
        serial.writeString("rx1 is ")
        serial.writeString(rx1)
        serial.writeLine("- - - ")
        serial.writeString("rx2 is ")
        serial.writeString(rx2)
        serial.writeLine("- - - ")
        temp = 0
    } else {
    	
    }
})
