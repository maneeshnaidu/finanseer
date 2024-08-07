# Use the official .NET image as a build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /finanseer

# Copy csproj and restore as distinct layers
COPY *.sln .
COPY api/*.csproj ./api/
RUN dotnet restore

# Copy everything else and build
COPY api/. ./api/
WORKDIR /finanseer/api
RUN dotnet publish -c Release -o out

# Use the official ASP.NET Core runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /finanseer/api/out .
ENTRYPOINT ["dotnet", "api.dll"]
