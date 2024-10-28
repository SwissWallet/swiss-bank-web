import { createContext, useState } from "react";

export interface UserProps{
    id: string;
    username: string;
    name: string;
    cpf: string;
    phone: string;
};

type UserContextPros = {
    user: UserProps | null;
    logIn: (user: UserProps) => void;
    logOut: () => void;
};

const UserContext = createContext<UserContextPros>({} as UserContextPros);

const UserProvider = ({ children }: {children: React.ReactNode}) => {
    const [ user, setUser ] = useState<UserProps | null>(null);

    const logIn = (user: UserProps) => {
        setUser(user);

        console.log(user);
    };

    const logOut = () => {
        console.log("logout");
    };

    return(
        <UserContext.Provider
            value={{
                user,
                logIn,
                logOut,
            }}
        >{children}
        </UserContext.Provider>
    )
};

export { UserContext, UserProvider };