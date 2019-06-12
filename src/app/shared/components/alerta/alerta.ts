export class Alerta {
    tipo: TipoAlerta;
    mensaje: string;
    cerrar: boolean;
}

export enum TipoAlerta {
    Success,
    Error,
    Info,
    Warning
}
