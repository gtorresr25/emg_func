/**
 * Use this file to define custom functions and blocks.
 * 
 * Read more at https://makecode.microbit.org/blocks/custom
 */
let ave = 0
let sum = 0
let list: number[] = []
let EMG_code = 0
let winsize = 15
for (let index = 0; index <= winsize; index++) {
    EMG_code = pins.analogReadPin(AnalogPin.P3)
    list.push(EMG_code)
}
namespace custom2 {
    /**
     * Use dynamic average window to filter EMG_code signal from Pin P3
     */
    //% block="EMG_filtered"
    export function EmgFilter(pin_name: AnalogPin): number {
        // Add code here

        EMG_code = pins.analogReadPin(pin_name)
        list.unshift(EMG_code)
        list.removeAt(winsize)
        sum = 0
        for (let index2 = 0; index2 <= winsize; index2++) {
            sum = sum + list[index2]
        }
        ave = sum / winsize
        return ave
    }
}
