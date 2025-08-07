export interface ModuleRootOptions {
  /**
   * The current working directory to start the search from.
   * @default process.cwd()
   */
  cwd?: string;
}

/**
 * Get the resolved path to the root (directory) of a package installed in node_modules.
 * 
 * @param name - The name of the package to find (e.g., 'foo' or '@scope/package')
 * @param options - Options object with optional cwd property
 * @returns The resolved path to the package root or current package root if no name provided
 */
declare function moduleRoot(name: string, options?: ModuleRootOptions): string;

/**
 * Get the resolved path to the root (directory) of the current package.
 * 
 * @param options - Options object with optional cwd property
 * @returns The resolved path to the current package root
 */
declare function moduleRoot(options?: ModuleRootOptions): string;

/**
 * Get the resolved path to the root (directory) of a package installed in node_modules,
 * or the current package root if no arguments provided.
 * 
 * @param args - Either a package name string, options object, or both
 * @returns The resolved path to the package root
 */
declare function moduleRoot(...args: [string?, ModuleRootOptions?]): string;

export default moduleRoot;
