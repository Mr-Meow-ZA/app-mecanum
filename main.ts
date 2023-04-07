function carForward () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    150,
    robotbit.Motors.M1B,
    150
    )
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    -150,
    robotbit.Motors.M2B,
    -150
    )
}
function carFrontRight () {
    robotbit.MotorRunDual(
    robotbit.Motors.M2B,
    -150,
    robotbit.Motors.M1B,
    150
    )
}
function serialCmdString () {
    serial.writeString("rx1 is ")
    serial.writeString(rx1)
    serial.writeLine("- - - ")
    serial.writeString("rx2 is ")
    serial.writeString(rx2)
    serial.writeLine("- - - ")
    temp = 0
}
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
function carRight () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    -150,
    robotbit.Motors.M1B,
    150
    )
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    150,
    robotbit.Motors.M2B,
    -150
    )
}
function carBackRight () {
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    150,
    robotbit.Motors.M1A,
    -150
    )
}
function carBackward () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    -150,
    robotbit.Motors.M1B,
    -150
    )
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    150,
    robotbit.Motors.M2B,
    150
    )
}
function carFrontLeft () {
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    -150,
    robotbit.Motors.M1A,
    150
    )
}
function carLeft () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    150,
    robotbit.Motors.M1B,
    -150
    )
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    -150,
    robotbit.Motors.M2B,
    150
    )
}
function carBackLeft () {
    robotbit.MotorRunDual(
    robotbit.Motors.M2B,
    150,
    robotbit.Motors.M1B,
    -150
    )
}
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Comma), function () {
    rx1 = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    rx2 = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Comma))
    temp = 1
    if (rx2 == "D") {
        buttonDown = 1
    } else if (rx2 == "U") {
        buttonDown = 0
    }
})
let rx2 = ""
let rx1 = ""
let buttonDown = 0
let temp = 0
bluetooth.startUartService()
basic.showIcon(IconNames.House)
temp = 0
buttonDown = 0
basic.forever(function () {
    if (temp == 1) {
        serialCmdString()
        if (buttonDown == 1) {
            if (rx1 == "F") {
                carForward()
            } else if (rx1 == "FR") {
                carFrontRight()
            } else if (rx1 == "R") {
                carRight()
            } else if (rx1 == "BR") {
                carBackRight()
            } else if (rx1 == "B") {
                carBackward()
            } else if (rx1 == "BL") {
                carBackLeft()
            } else if (rx1 == "L") {
                carLeft()
            } else if (rx1 == "FL") {
                carFrontLeft()
            }
        } else if (buttonDown == 0) {
            robotbit.MotorStopAll()
        }
    }
})
