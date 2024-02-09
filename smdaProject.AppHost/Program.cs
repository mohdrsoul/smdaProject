var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.smdaProject>("smdaproject");

builder.Build().Run();
