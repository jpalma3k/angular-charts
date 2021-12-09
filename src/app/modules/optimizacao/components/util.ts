export class Util {

    static PERFIL_ADMIN:string = "Admin";

    static customFilter = (value, filter): boolean => {
        if (filter === undefined || filter === null || filter.trim() === '') {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        return parseInt(filter) > value;
    }

    static mesesDic: any = {
        "01": "Jan",
        "02": "Fev",
        "03": "Mar",
        "04": "Abr",
        "05": "Mai",
        "06": "Jun",
        "07": "Jul",
        "08": "Ago",
        "09": "Set",
        "10": "Out",
        "11": "Nov",
        "12": "Dez"
    }

    static listaEstados = [
        { label: 'SIM', value: 'Sim' },
        { label: 'NÃO', value: 'Não' }
    ];

    static expandCollumnWidth: string = '50px';

    static pedidosDefaultCols = [
        { field: 'id', header: 'ID', width: '60px', align: 'center' },
        { field: 'versao', header: 'Versão', width: '60px', align: 'center' },
        { field: 'descricao', header: 'Descrição', width: '150px', align: 'left' },
        { field: 'sim_mur', header: 'Sim. MUR', width: '80px', align: 'center' },
        { field: 'versao_mur', header: 'Versão MUR', width: '90px', align: 'center' },
        { field: 'oficial', header: 'Oficial', width: '60px', align: 'center' },
        { field: 'log_data', header: 'Data Modificação', width: '120px', align: 'center' },
    ];

    static operDefaultCols: any[] = [
        // { field: 'id_pedido', header: 'ID Pedido' },
        { field: 'id_operacao', header: 'ID', width: '80px', align: 'left' },
        { field: 'data_criacao', header: 'Data Criação', width: '150px', align: 'left' },
        // { field: 'id_companhia', header: 'ID Companhia' },
        { field: 'nome_companhia', header: 'Companhia', width: '150px', align: 'left' },
        // { field: 'id_contraparte', header: 'ID Contraparte' },
        { field: 'nome_contraparte', header: 'Contraparte', width: '150px', align: 'left' },
        // { field: 'id_instrumento', header: 'ID Instrumento' },
        { field: 'nome_instrumento', header: 'Instrumento', width: '150px', align: 'left' },
        { field: 'observacoes', header: 'Observações', width: '300px', align: 'left' },
        { field: 'estrategia', header: 'Estratégia', width: '150px', align: 'left' },
        { field: 'objectivo_prazo', header: 'Objectivo Prazo', width: '150px', align: 'left' },
        { field: 'objectivo_preco', header: 'Objectivo Preço', width: '150px', align: 'left' },
        { field: 'data_inicio', header: 'Data Início', width: '150px', align: 'left' },
        { field: 'data_fim', header: 'Data Fim', width: '150px', align: 'left' },
        { field: 'volume_total', header: 'Volume Total', width: '150px', align: 'left' },
        { field: 'preco_medio_mercado', header: 'Preço Médio (Mercado)', width: '150px', align: 'left' },
        { field: 'volume_total_mercado', header: 'Volume Total (Mercado)', width: '150px', align: 'left' },
        { field: 'preco_medio_passagem', header: 'Preço Médio (Passagem)', width: '150px', align: 'left' },
        { field: 'volume_total_passagem', header: 'Volume Total (Passagem)', width: '150px', align: 'left' }
    ];

    static createMonthColumns(arr: any[]): any[] {
        const cArr: any[] = [];
        if (arr.length > 0) {
            for (let key in arr[0]) {
                //console.log(key)
                if (!isNaN(parseInt(key)) && key.length == 6) { // YYYYMM
                    const col = {
                        field: key,
                        header: `${Util.mesesDic[key.slice(-2)]}/${key.slice(2, 4)}`,
                        width: '100px'
                    }
                    cArr.push(col);
                }
            }
        }
        return cArr;
    }

    static colorArray: string[] = ['#00B3E6', '#4D80CC',
    '#E6B333', '#B366CC', '#999966', '#B34D4D',
    '#809900', '#6680B3', '#66991A', '#CCFF1A',
    '#66994D', '#3366E6', '#4D8000', '#B33300',
    '#66664D', '#4DB3FF', '#33991A', '#CC9999',
    '#4D8066', '#809980', '#999933', '#CCCC00'];

}