"use strict";
class Sueldo {
    constructor(salario, bonificacion, comisiones, ahorro, igss, prestamos) {
        this.salario = salario;
        this.bonificacion = bonificacion;
        this.comisiones = comisiones;
        this.ahorro = ahorro;
        this.igss = igss;
        this.prestamos = prestamos;
        this.totalGanado = 0;
        this.totalDescuentos = 0;
        this.sueldoLiquido = 0;
    }
    calcularTotalGanado() {
        this.totalGanado = this.salario + this.bonificacion + this.comisiones;
        return this.totalGanado;
    }
    calcularIGSS() {
        this.igss = this.salario * 0.0483;
        return this.igss;
    }
    calcularTotalDescuentos() {
        this.totalDescuentos = this.ahorro + this.igss + this.prestamos;
        return this.totalDescuentos;
    }
    calcularSueldoLiquido() {
        this.sueldoLiquido = this.totalGanado - this.totalDescuentos;
        return this.sueldoLiquido;
    }
    calcularTotalGanadoYDescuentos() {
        return this.totalGanado + this.totalDescuentos;
    }
}
function calcularSueldoLiquido() {
    // Obtener valores de ingresos
    const salario = parseFloat(document.getElementById('salario').value) || 0;
    const bonificacion = parseFloat(document.getElementById('bonificacion').value) || 0;
    const comisiones = parseFloat(document.getElementById('comisiones').value) || 0;
    // Obtener valores de egresos
    const ahorro = parseFloat(document.getElementById('ahorro').value) || 0;
    const prestamos = parseFloat(document.getElementById('prestamos').value) || 0;
    // Crear instancia de la clase Sueldo
    const sueldo = new Sueldo(salario, bonificacion, comisiones, ahorro, 0, prestamos);
    // Calcular y asignar valores
    document.getElementById('total-ganado').value = sueldo.calcularTotalGanado().toFixed(2);
    document.getElementById('igss').value = sueldo.calcularIGSS().toFixed(2);
    document.getElementById('total-descuentos').value = sueldo.calcularTotalDescuentos().toFixed(2);
    // Calcular sueldo líquido
    const sueldoLiquido = sueldo.calcularSueldoLiquido();
    alert('El sueldo líquido es: ' + sueldoLiquido.toFixed(2));
    // Calcular total de total ganado y total descuentos
    const totalGanadoYDescuentos = sueldo.calcularTotalGanadoYDescuentos();
    document.getElementById('resultado').innerText = `Total Ganado + Total Descuentos: ${totalGanadoYDescuentos.toFixed(2)}`;
}
