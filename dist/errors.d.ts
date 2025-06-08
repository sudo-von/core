/**
 * Base error class for all application-related exceptions.
 * Can be extended to create consistent, domain-specific error types throughout the application.
 */
export declare class CoreError extends Error {
    /**
     * @param message - The error message.
     */
    constructor(message: string);
}
/**
 * Error thrown when a method is intentionally not implemented yet.
 * Useful for abstract base classes, stubs, or unfinished features.
 */
export declare class MethodNotImplementedYetError extends CoreError {
    /**
     * @param method - The name of the method that is not implemented.
     */
    constructor(method: string);
}
/**
 * Error thrown when a service fails to start or initialize.
 * This can represent failures due to missing dependencies, misconfigurations,
 * or other issues that prevent the service from starting properly.
 */
export declare class ServiceInitializationError extends CoreError {
    /**
     * @param service - The name of the service that failed to initialize.
     * @param reason - A descriptive reason for the failure.
     */
    constructor(service: string, reason: string);
}
//# sourceMappingURL=errors.d.ts.map