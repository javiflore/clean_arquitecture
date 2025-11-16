# Clean Architecture — Proyecto de ejemplo

Pequeño proyecto para demostrar estructura y tooling (TypeScript + Vitest).

**Archivos relevantes**
- `src/` — Código fuente
- `tests/` — Pruebas unitarias (Vitest)
- `vitest.config.ts` — Configuración de Vitest (incluye alias de carpetas)
- `package.json` — Scripts y dependencias

Prerequisitos
- Node.js (16+ recomendado)
- npm

Instalación

```powershell
npm install
```

Scripts útiles
- Ejecutar todos los tests:

```powershell
npm test
```

- Ejecutar un test en concreto (ejemplo):

```powershell
npx vitest run tests/shared/health.spec.ts
```

- Ejecutar en modo watch (dev):

```powershell
npx vitest --watch
```

Notas importantes
- El proyecto usa módulos ES: en `package.json` hay `"type": "module"`.
- `vitest.config.ts` define aliases para carpetas, por ejemplo:
  - `@app` → `src/application`
  - `@config` → `src/config`
  - `@domain` → `src/domain`
  - `@infra` → `src/infraestructure`
  - `@shared` → `src/shared`
  - `@src` → `src`

  En tests puedes importar así:

```ts
import { checkHealth } from '@shared/health';
```

- Si añades aliases para uso en tiempo de ejecución (app) y en el editor, considera añadir `paths` en `tsconfig.json` y/o configurar el bundler.

Problemas comunes
- Error `ERR_REQUIRE_ESM` al cargar `vite` con `vitest`: normalmente se soluciona teniendo `"type": "module"` en `package.json` o ajustando la configuración para usar ESM.

Contacto / Siguientes pasos
- Si quieres, puedo añadir `paths` en `tsconfig.json`, documentar una guía de desarrollo más amplia o añadir más tests y ejemplos.
