export class Matrix {

    rows: Array<Array<number>>
    columns: Array<Array<number>>

    constructor(input: string) {
        this.rows = input.split('\n').map(s => s.split(' ').map(c => Number(c)))
        this.columns = [...Array(this.rows[0].length).keys()].map(i => this.rows.map(r => r[i]))
    }

}
