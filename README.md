# Components-TS

Una librería de componentes en TypeScript para React.

## Instalación

Para instalar la librería, puedes usar npm:

```bash
npm install components-ts
```

## Uso

### MyButton Component

El componente `MyButton` es un botón personalizable con soporte para diferentes tamaños y estilos.

#### Props

- `primary` (boolean, opcional): Define si el botón es de estilo primario.
- `size` (`'small' | 'medium' | 'large'`, opcional): Define el tamaño del botón (por defecto es `'medium'`).
- `label` (string, requerido): Texto que aparecerá dentro del botón.

#### Ejemplo de Uso

```tsx
import React from 'react';
import { MyButton } from 'components-ts';

const App = () => {
  return (
    <div>
      <MyButton label="Click me" />
      <MyButton primary label="Primary Button" size="large" />
    </div>
  );
};

export default App;
```

### Estilos

Los estilos de los componentes se manejan mediante módulos CSS para un encapsulamiento efectivo.

## Licencia

MIT