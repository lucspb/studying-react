import { useEffect, useMemo, useState } from 'react'

    // exercicio 1 - title com nome e idade
    const UserInfo = ({userInfo}) => {


        useEffect(() => {
            document.title = `${userInfo.name} - ${userInfo.age} anos`


        }, [userInfo])

        return (
            <div>
                <h1>Nome: {userInfo.name}</h1>
                <h2>Idade: {userInfo.age}</h2>
            </div>
          ) 
    }

    //exercicio 2 - calculo de fibonacci
    const fibonnaci = (n) => {
        if(n <= 1) {
            return n
        }

        return fibonnaci(n - 1) + fibonnaci(n - 2)
    }


    const FibCalculator = ({num}) => {
        const fibResult = useMemo(() => fibonnaci(num), [num])

        return (
            <div>
                <p>Fibonacci de {num} é {fibResult}</p>
            </div>
        )
        
    }

    const useOnlineStatus = () => {

        const [isOnline, setIsOnline] = useState(navigator.onLine);

        useEffect(() => {
            const handleOnline = () => setIsOnline(true)
            const handleOffline = () => setIsOnline(false)

            window.addEventListener("online", handleOnline)
            window.addEventListener("offline", handleOffline)

            //limpeza
            return () => {
                window.removeEventListener("online", handleOnline)
                window.removeEventListener("offline", handleOffline)
            }

        }, [])

        return isOnline;
    }

    const OnlineStatusIndicator = () => {
        const isOnline = useOnlineStatus();

        return (
            <div>
                <p> Você está atualmente: {isOnline ? 'Online' : 'Offline'} </p>
            </div>
        )
    }

    const Exercises = () => {

        const userInfo = {
            name: "Lucas",
            age: "30"
        }

  return (
    <div>
        <h1>Exercicio 1</h1>
        <UserInfo userInfo={userInfo} />
        <h1>Exercicio 2</h1>
        <FibCalculator num={3}/>
        <h1>Exercicio 3</h1>
        <OnlineStatusIndicator />
    </div>
  )
}

export default Exercises