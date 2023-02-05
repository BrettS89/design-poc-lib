/// <reference types="react" />
export declare const useDesignSystem: (designSystemId: string) => {
    isLoading: boolean;
    isError: boolean;
    error: null | string;
};
export declare const useStyles: (componentName: string) => Record<string, any>;
export declare const DesignSystemProvider: ({ children }: {
    children: any;
}) => JSX.Element;
