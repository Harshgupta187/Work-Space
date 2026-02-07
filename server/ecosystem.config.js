module.exports ={
  apps: [
    {
      name: "Work-Space",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development"
      },
    },
  ],
};