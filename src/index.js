const fastify = require('fastify')({ logger: true })
const fs = require('fs')

fastify.get('/', async (request, reply) => {
	const stream = fs.createReadStream('../html/index.html', 'utf8')
	return reply.send(stream)
})

const start = async () => {
	try {
		await fastify.listen({ port: 5050 })
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}

start()


