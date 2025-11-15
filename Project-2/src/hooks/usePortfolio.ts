import { useContext } from 'react';
import { PortfolioContext, PortfolioContextType } from './PortfolioContext'; 

export const usePortfolioData = (): PortfolioContextType => {
    const context = useContext(PortfolioContext);
    if (context === undefined) {
        throw new Error('usePortfolioData hook\'u PortfolioProvider içinde kullanılmalıdır.');
    }
    return context;
};