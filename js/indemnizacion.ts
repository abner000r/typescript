class Indemnizacion {
    salarioBase: number;
    aniosTrabajados: number;
    mesesTrabajados: number;
    salarioPendiente: number;
    deudas: number;

    constructor(salarioBase: number, aniosTrabajados: number, mesesTrabajados: number, salarioPendiente: number, deudas: number) {
        this.salarioBase = salarioBase;
        this.aniosTrabajados = aniosTrabajados;
        this.mesesTrabajados = mesesTrabajados;
        this.salarioPendiente = salarioPendiente;
        this.deudas = deudas;
    }

    calcularBono14(): number {
        return (this.salarioBase / 12) * this.mesesTrabajados;
    }

    calcularAguinaldo(): number {
        return (this.salarioBase / 12) * this.mesesTrabajados;
    }

    calcularIndemnizacion(): number {
        const indemnizacionBase = this.salarioBase * this.aniosTrabajados;
        const bono14 = this.calcularBono14();
        const aguinaldo = this.calcularAguinaldo();
        const totalIndemnizacion = indemnizacionBase + bono14 + aguinaldo + this.salarioPendiente - this.deudas;
        return totalIndemnizacion;
    }
}

function calcularIndemnizacion(): void {
    const salarioBase = parseFloat((document.getElementById('salario-base') as HTMLInputElement).value) || 0;
    const aniosTrabajados = parseFloat((document.getElementById('anios-trabajados') as HTMLInputElement).value) || 0;
    const mesesTrabajados = parseFloat((document.getElementById('meses-trabajados') as HTMLInputElement).value) || 0;
    const salarioPendiente = parseFloat((document.getElementById('salario-pendiente') as HTMLInputElement).value) || 0;
    const deudas = parseFloat((document.getElementById('deudas') as HTMLInputElement).value) || 0;

    const indemnizacion = new Indemnizacion(salarioBase, aniosTrabajados, mesesTrabajados, salarioPendiente, deudas);
    const totalIndemnizacion = indemnizacion.calcularIndemnizacion();

    document.getElementById('resultado')!.innerText = `La indemnización total es: Q${totalIndemnizacion.toFixed(2)}`;
}

jd

