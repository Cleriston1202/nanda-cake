// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {list} from '../../../../dados'
export default (req, res) => {
  res.status(200).json(list)
}
