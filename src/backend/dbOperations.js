import { db } from "./db";
import { addDoc, collection, getDocs, getDoc, doc, updateDoc, deleteDoc, query, where } from 'firebase/firestore'

// Funciones para modificar la base de datos

// Función para obtener todas las reservaciones
export const obtenerReservaciones = async () => {
    try {
        const reservacionesCollection = collection(db, 'reservaciones');
        const reservacionesSnapshot = await getDocs(reservacionesCollection);
        return reservacionesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error('Error al obtener las reservaciones:', error);
        throw error;
    }
};

// Función para crear una nueva reservación
export const crearReservacion = async (nuevaReservacion) => {
    try {
        const reservacionesCollection = collection(db, 'reservaciones');
        const q = query(reservacionesCollection, where("fecha", "==", nuevaReservacion.fecha));

        const querySnapshot = await getDocs(q);
        const reservacionesMismaFecha = querySnapshot.docs.map(doc => doc.data());

        const reservacionesMismoHorario = reservacionesMismaFecha.filter(res => res.hora === nuevaReservacion.hora);

        if (reservacionesMismoHorario.length >= 5) {
            return {
                success: false,
                message: `Ya no hay mesas disponibles en el horario ${nuevaReservacion.hora}. Por favor, elige otro horario.`
            };
        }

        await addDoc(reservacionesCollection, nuevaReservacion);
        return {
            success: true,
            message: 'Reservación creada con éxito.'
        };
    } catch (error) {
        console.error('Error al crear la reservación:', error);
        return {
            success: false,
            message: 'Hubo un problema al crear la reservación. Inténtalo de nuevo más tarde.'
        };
    }
};

// Función para añadir pedido
export const crearPedido = async (pedido) => {
    try {
        const docRef = await addDoc(collection(db, 'pedidos'), pedido);
        console.log("Pedido registrado con ID: ", docRef.id);
        return docRef.id;
    } catch (e) {
        console.error("Error al añadir el pedido: ", e);
        throw new Error("No se pudo registrar el pedido."); 
    }
};

// Función para crear una nueva sugerencia
export const crearSugerencia = async (nuevaSugerencia) => {
    try {
        const referenciaColeccion = collection(db, 'Sugerencias');

        const docRef = await addDoc(referenciaColeccion, nuevaSugerencia);

        console.log('Sugerencia creada con ID:', docRef.id);
        return docRef.id;
    } catch (error) {
        console.error('Error al crear la sugerencia:', error);
        throw error;
    }
};


