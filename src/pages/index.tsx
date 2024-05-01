import Button from '../components/button';
import Form from '../components/form';
import Layout from '../components/layout';
import Table from '../components/table';
import useClients from '../hooks/useClients';

export default function Home() {
    const {
        client,
        clients,
        clientDeleted,
        clientSelected,
        newClient,
        saveClient,
        tableVisible,
        displayTable,
    } = useClients();

    return (
        <div
            className={`flex justify-center items-center 
            h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white`}
        >
            <Layout title={'Simple registration'}>
                {tableVisible ? (
                    <>
                        <div className="flex justify-end">
                            <Button
                                color="blue"
                                className="mb-4"
                                onClick={newClient}
                            >
                                Novo Cliente
                            </Button>
                        </div>

                        <Table
                            clients={clients}
                            clientSelected={clientSelected}
                            clientDeleted={clientDeleted}
                        />
                    </>
                ) : (
                    <Form
                        client={client}
                        clientChanged={saveClient}
                        canceled={displayTable}
                    />
                )}
            </Layout>
        </div>
    );
}
