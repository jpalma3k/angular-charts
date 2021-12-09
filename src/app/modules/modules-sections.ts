import { environment } from 'src/environments/environment';
import { Util as UtilOptimizacao } from './optimizacao/components/util';

export const MODULES_SECTIONS = [
    {
        name:'admin',
        route: '/403',
        sections: []
      },
      {
        name:'optimizacao',
        route: '/optimizacao',
        sections: [
            { type:'route', display_name:'Análise', route:'optimizacao/analise_pedidos', profile_access:[UtilOptimizacao.PERFIL_ADMIN]}          ]
      }
];