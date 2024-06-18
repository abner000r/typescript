class Sueldo {
    salario: number;
    bonificacion: number;
    comisiones: number;
    ahorro: number;
    igss: number;
    prestamos: number;
    totalGanado: number;
    totalDescuentos: number;
    sueldoLiquido: number;

    constructor(salario: number, bonificacion: number, comisiones: number, ahorro: number, igss: number, prestamos: number) {
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

    calcularTotalGanado(): number {
        this.totalGanado = this.salario + this.bonificacion + this.comisiones;
        return this.totalGanado;
    }

    calcularIGSS(): number {
        this.igss = this.salario * 0.0483;
        return this.igss;
    }

    calcularTotalDescuentos(): number {
        this.totalDescuentos = this.ahorro + this.igss + this.prestamos;
        return this.totalDescuentos;
    }

    calcularSueldoLiquido(): number {
        this.sueldoLiquido = this.totalGanado - this.totalDescuentos;
        return this.sueldoLiquido;
    }

    calcularTotalGanadoYDescuentos(): number {
        return this.totalGanado + this.totalDescuentos;
    }
}

function calcularSueldoLiquido(): void {
    // Obtener valores de ingresos
    const salario: number = parseFloat((document.getElementById('salario') as HTMLInputElement).value) || 0;
    const bonificacion: number = parseFloat((document.getElementById('bonificacion') as HTMLInputElement).value) || 0;
    const comisiones: number = parseFloat((document.getElementById('comisiones') as HTMLInputElement).value) || 0;

    // Obtener valores de egresos
    const ahorro: number = parseFloat((document.getElementById('ahorro') as HTMLInputElement).value) || 0;
    const prestamos: number = parseFloat((document.getElementById('prestamos') as HTMLInputElement).value) || 0;

    // Crear instancia de la clase Sueldo
    const sueldo = new Sueldo(salario, bonificacion, comisiones, ahorro, 0, prestamos);

    // Calcular y asignar valores
    document.getElementById('total-ganado')!.value = sueldo.calcularTotalGanado().toFixed(2);
    document.getElementById('igss')!.value = sueldo.calcularIGSS().toFixed(2);
    document.getElementById('total-descuentos')!.value = sueldo.calcularTotalDescuentos().toFixed(2);

    // Calcular sueldo líquido
    const sueldoLiquido: number = sueldo.calcularSueldoLiquido();
    alert('El sueldo líquido es: ' + sueldoLiquido.toFixed(2));

    // Calcular total de total ganado y total descuentos
    const totalGanadoYDescuentos: number = sueldo.calcularTotalGanadoYDescuentos();
    document.getElementById('resultado')!.innerText = `Total Ganado + Total Descuentos: ${totalGanadoYDescuentos.toFixed(2)}`;
}

