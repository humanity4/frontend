declare module "routes-gen" {
  export type RouteParams = {
    "/supporters": {};
    "/callback": {};
    "/logout": {};
    "/neighborhoods": {};
    "/sisters": {};
    "/auth": {};
    "/": {};
  };

  export function route<
    T extends
      | ["/supporters"]
      | ["/callback"]
      | ["/logout"]
      | ["/neighborhoods"]
      | ["/sisters"]
      | ["/auth"]
      | ["/"]
  >(...args: T): typeof args[0];
}
