import { Request, Response, Router } from 'express';
import { Knex } from 'server/utils/db';

const router: Router = Router();

// define '/api/common/*' routes
router.get('/test', get_testEndpoint);

async function get_testEndpoint(req: Request, res: Response) {
  try {
    const result = await Knex
      .select('firstname', 'lastname')
      .from('users');

    res.json({ result: result });
  } catch (err) {
    res.json({ error: err });
  }
  // Knex.insert([{title: 1}, {title: 'David'}, {title: 'White'},  {title: true}], ['id']).into('users');

}


// export router
export const CommonController: Router = router;

Knex.select('firstname')
  .from('users')
  .where('id', '>', 20)
  .andWhere('id', '<', 200)
  .limit(10)
  .offset(5)
  .then(function(rows) {
    return _.pluck(rows, 'name');
  })
  .then(function(names) {
    return Knex.select('id').from('nicknames').whereIn('nickname', names);
  })
  .then(function(rows) {
    console.log(rows);
  })
  .catch(function(error) {
    console.error(error);
  });

  // then — .then(onFulfilled, [onRejected]);

// function findById(id) {
//   return Knex('users')
//     .select()
//     .where('id', id)
//     .first()
//     .then(data => {
//       return data;
//     })
//     .catch((err) => console.log(err));
