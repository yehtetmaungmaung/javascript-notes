const log = async (context, next) => {
    console.log(`Request made to ${context.request.url.pathname}`);
    await next();
    console.log(`Request made to ${context.request.url.pathname} completed`);
};

export { log };