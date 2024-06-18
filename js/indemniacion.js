
"use strict";
class Indemnizacion {
    constructor(salarioBase, aniosTrabajados, mesesTrabajados, salarioPendiente, deudas) {
        this.salarioBase = salarioBase;
        this.aniosTrabajados = aniosTrabajados;
        this.mesesTrabajados = mesesTrabajados;
        this.salarioPendiente = salarioPendiente;
        this.deudas = deudas;
    }
    calcularBono14() {
        return (this.salarioBase / 12) * this.mesesTrabajados;
    }
    calcularAguinaldo() {
        return (this.salarioBase / 12) * this.mesesTrabajados;
    }
    calcularIndemnizacion() {
        const indemnizacionBase = this.salarioBase * this.aniosTrabajados;
        const bono14 = this.calcularBono14();
        const aguinaldo = this.calcularAguinaldo();
        const totalIndemnizacion = indemnizacionBase + bono14 + aguinaldo + this.salarioPendiente - this.deudas;
        return totalIndemnizacion;
    }
}
function calcularIndemnizacion() {
    const salarioBase = parseFloat(document.getElementById('salario-base').value) || 0;
    const aniosTrabajados = parseFloat(document.getElementById('anios-trabajados').value) || 0;
    const mesesTrabajados = parseFloat(document.getElementById('meses-trabajados').value) || 0;
    const salarioPendiente = parseFloat(document.getElementById('salario-pendiente').value) || 0;
    const deudas = parseFloat(document.getElementById('deudas').value) || 0;
    const indemnizacion = new Indemnizacion(salarioBase, aniosTrabajados, mesesTrabajados, salarioPendiente, deudas);
    const totalIndemnizacion = indemnizacion.calcularIndemnizacion();
    document.getElementById('resultado').innerText = `La indemnización total es: Q${totalIndemnizacion.toFixed(2)}`;
}
