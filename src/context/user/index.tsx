import { createContext, useState } from "react";

export interface UserProps{
    id: string;
    username: string;
    name: string;
    cpf: string;
    phone: string;
};

export interface CardProps{
    cardNumber: string;
    validity: string;
    cvv: string;
    cardLimit: string;
};

export interface AccountProps{
    id: string;
    accountNumber: string;
    balance: string;
};

type UserContextProps = {
    user: UserProps | null;
    card: CardProps | null;
    account: AccountProps | null;
    logIn: (user: UserProps) => void;
    setDataCard: (card: CardProps) => void;
    setDataAccount: (account: AccountProps) => void;
    logOut: () => void;
};

const UserContext = createContext<UserContextProps>({} as UserContextProps);

const UserProvider = ({ children }: {children: React.ReactNode}) => {
    const [ user, setUser ] = useState<UserProps | null>(null);
    const [ card, setCard ] = useState<CardProps | null>(null);
    const [ account, setAccount ] = useState<AccountProps | null>(null);

    const logIn = (user: UserProps) => {
        setUser(user);
    };

    const setDataCard = (card: CardProps) => {
        setCard(card);
    };

    const setDataAccount = (account: AccountProps) => {
        setAccount(account);
    };

    const logOut = () => {
        setUser(null);
    };

    return(
        <UserContext.Provider
            value={{
                user,
                card,
                account,
                logIn,
                logOut,
                setDataCard,
                setDataAccount
            }}
        >{children}
        </UserContext.Provider>
    )
};

export { UserContext, UserProvider };