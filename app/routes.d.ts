declare module "routes-gen" {
  export type RouteParams = {
    "/callback": {};
    "/logout": {};
    "/auth": {};
    "/": {};
    "/projects": {};
    "/projects/:id": { "id": string };
    "/projects/new": {};
    "/about": {};
  };

  export function route<
    T extends
      | ["/callback"]
      | ["/logout"]
      | ["/auth"]
      | ["/"]
      | ["/projects"]
      | ["/projects/:id", RouteParams["/projects/:id"]]
      | ["/projects/new"]
      | ["/about"]
  >(...args: T): typeof args[0];
}
