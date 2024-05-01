import { useEffect, useMemo, useState } from 'react';
import ClientRepository from '../core/ClientRepository';
import CollectionClient from '../backend/db/CollectionClient';
import Client from '../core/Client';
import useTableOrForm from './useTablerOrForm';

export default function useClients() {
    const repo: ClientRepository = useMemo(() => new CollectionClient(), []);

    const { tableVisible, displayForm, displayTable } = useTableOrForm();

    const [client, setClient] = useState<Client>(Client.empty());
    const [clients, setClients] = useState<Client[]>([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(getAll, [repo]);

    function getAll() {
        repo.getAll().then((clients) => {
            setClients(clients);
           displayTable()
        });
    }

    function clientSelected(client: Client) {
        setClient(client);
        displayForm();
    }

    async function clientDeleted(client: Client) {
        await repo.delete(client);
        getAll();
    }

    async function saveClient(client: Client) {
        await repo.save(client);
        getAll();
    }

    function newClient() {
        setClient(Client.empty());
        displayForm()
    }

    return {
        client,
        clients,
        newClient,
        saveClient,
        clientDeleted,
        clientSelected,
        tableVisible,
        displayTable,
    };
}
