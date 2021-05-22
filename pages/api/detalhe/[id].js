import {list} from '../../../dados'
export default (req, res) => {

    const id = req.query.id
    const result = list.filter((nome)=>nome.id === parseInt(id))

    if(result.length > 0){
        res.status(200).json(result[0])
    }else{
        res.status(404).json({"erro": "Id não encontrado"}) 
    }
 
}