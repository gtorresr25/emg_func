/**
 * Use this file to define custom functions and blocks.
 * 
 * Read more at https://makecode.microbit.org/blocks/custom
 */
let ave = 0
let sum = 0
let list: number[] = []
let EMG_code = 0
let window_size = 15
// Change the EMG name to EMG_code so student's variable will not have conflict
for (let index = 0; index <= window_size; index++) {
    EMG_code = pins.analogReadPin(AnalogPin.P3)
    // list.push(0)
    list.push(EMG_code)
}
namespace custom {
    /**
     * Use dynamic average window to filter EMG signal from Pin P3
     */
    //% block="EMG_filtered in the windows size %window_size by pin %pin_name"
    export function EmgFilter(window_size: number, pin_name: AnalogPin): number {
        // Add code here
        EMG_code = pins.analogReadPin(pin_name)
        list.unshift(EMG_code)
        list.removeAt(window_size)
        sum = 0
        for (let index2 = 0; index2 <= window_size; index2++) {
            sum = sum + list[index2]
        }
        ave = sum / window_size
        return ave
    }
}
