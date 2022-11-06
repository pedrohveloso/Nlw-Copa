import '@fastify/jwt'

declare module '@fastify/jwt' {
  interface FastifyJWT {
    user: {
      sub: String;
      name: String;
      avatarUrl: String;
    }
  }
}