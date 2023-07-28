/* eslint-disable no-undef */
const app = require('../..')
const request = require('supertest')

describe('Waxaan tijaabinaa getka post', () => {
  // get method tersting
  it('Get testijng/waxaan doonayaa status code ah 200', async () => {
    const resp = await request(app).get('/client')
    expect(resp.statusCode).toBe(200)
  })
  it('post testijng/waxaan doonayaa status code ah 201', async () => {
    const resp = await request(app).post('/client').send({
      ClientName: 'Abraar',
      Logo: 'kjgdfghjklhgf'

    })
    expect(resp.statusCode).toBe(201)
  })
  // it("update client waxaana filayaa status code 200", async () => {
  //   const Update = await request(app).put(`/client/${Id}`).send({
  //     ClientName: "Abraar",
  //     Logo: "kjgdfghjklhgf",
  //   });

  //   expect(Update.statusCode).toBe(200);
  //   Id=resp.body.Client._id;
  // });
})
describe('Waxaan tijaabinaa getka post galaryga', () => {
  // get method tersting
  it('Get testijng/waxaan doonayaa status code ah 200', async () => {
    const resp = await request(app).get('/galary')
    expect(resp.statusCode).toBe(200)
  })
  it('post testijng/waxaan doonayaa status code ah 201', async () => {
    const resp = await request(app).post('/galary').send({
      ImageTitle: 'Magaadlo',
      ImagePath: 'kejwsfhsjkdjs'

    })
    expect(resp.statusCode).toBe(201)
  })
})
describe('Waxaan tijaabinaa getka post galaryga', () => {
  // get method tersting
  it('Get testijng/waxaan doonayaa status code ah 200', async () => {
    const resp = await request(app).get('/houses')
    expect(resp.statusCode).toBe(200)
  })
  it('post testijng/waxaan doonayaa status code ah 201', async () => {
    const resp = await request(app).post('/houses').send({

      type: 'Villa',
      Address: 'kaawa godeey',
      Age: '19',
      Rent: '1000$',
      Deposit: '200$',
      Parking: 'yes',
      Images: 'https://images.unsplash.com/photo-1686884575344-9a506e1426f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      Status: '2Available',
      Rooms: '20',
      Pathrooms: '10',
      Owner: 'Mohamed Abdulkadir',
      creatorID: '648f56f65239cd4634839843'

    })
    expect(resp.statusCode).toBe(201)
  })
})
