import React, { useState } from 'react';
import Dropdown from '@/Components/Dropdown';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useForm, usePage } from '@inertiajs/react';
 
dayjs.extend(relativeTime);

export default function Chirp({ chirp }) {
    const { auth } = usePage().props;
 
    const [editing, setEditing] = useState(false);
 
    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        message: chirp.message,
    });
 
    const submit = (e) => {
        e.preventDefault();
        patch(route('chirps.update', chirp.id), { onSuccess: () => setEditing(false) });
    };

    return (
        <div className="p-6 flex space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 -scale-x-100" viewBox="0 0 48 48" width="24px" height="24px"><path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 14.660156 A 1.50015 1.50015 0 1 0 9 14.660156 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 25 A 1.50015 1.50015 0 1 0 42 25 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 24.162109 12.001953 C 20.643109 12.025953 17.931609 13.217922 16.099609 15.544922 C 14.485609 17.597922 13.652047 20.439719 13.623047 24.011719 C 13.651047 27.562719 14.484609 30.403078 16.099609 32.455078 C 17.930609 34.782078 20.643641 35.974047 24.181641 35.998047 C 27.309641 35.977047 29.520609 35.150266 31.349609 33.322266 C 33.779609 30.894266 33.703391 27.848562 32.900391 25.976562 C 32.320391 24.624562 31.223609 23.5305 29.724609 22.8125 C 29.689609 22.7945 29.653187 22.778719 29.617188 22.761719 C 29.353188 19.381719 27.403266 17.438969 24.197266 17.417969 C 22.253266 17.417969 20.632812 18.253484 19.632812 19.771484 C 19.520813 19.941484 19.565375 20.170109 19.734375 20.287109 L 21.402344 21.431641 C 21.485344 21.488641 21.587547 21.509234 21.685547 21.490234 C 21.783547 21.471234 21.872734 21.412125 21.927734 21.328125 C 22.531734 20.413125 23.495609 20.222656 24.224609 20.222656 C 25.110609 20.227656 25.768641 20.473125 26.181641 20.953125 C 26.404641 21.212125 26.575359 21.550891 26.693359 21.962891 C 25.936359 21.871891 25.131063 21.850437 24.289062 21.898438 C 21.183063 22.077437 19.185266 23.917516 19.322266 26.478516 C 19.391266 27.784516 20.041344 28.909531 21.152344 29.644531 C 22.070344 30.249531 23.249609 30.549469 24.474609 30.480469 C 26.095609 30.391469 27.370625 29.767953 28.265625 28.626953 C 28.838625 27.897953 29.225359 27.002344 29.443359 25.902344 C 29.865359 26.243344 30.175141 26.642703 30.369141 27.095703 C 30.824141 28.153703 30.848016 29.896172 29.416016 31.326172 C 28.122016 32.619172 26.552781 33.180266 24.175781 33.197266 C 21.533781 33.177266 19.543766 32.339031 18.259766 30.707031 C 17.040766 29.157031 16.409719 26.900906 16.386719 24.003906 C 16.409719 21.100906 17.040766 18.842969 18.259766 17.292969 C 19.543766 15.660969 21.533922 14.821734 24.169922 14.802734 C 26.834922 14.822734 28.862266 15.666547 30.197266 17.310547 C 30.850266 18.114547 31.350594 19.132844 31.683594 20.339844 C 31.738594 20.537844 31.944578 20.654516 32.142578 20.603516 L 34.097656 20.082031 C 34.194656 20.057031 34.276172 19.99225 34.326172 19.90625 C 34.375172 19.81825 34.387328 19.716141 34.361328 19.619141 C 33.930328 18.034141 33.246172 16.658344 32.326172 15.527344 C 30.444172 13.212344 27.705109 12.025953 24.162109 12.001953 z M 7.4765625 18.882812 A 1.50015 1.50015 0 0 0 6 20.404297 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 32.787109 A 1.50015 1.50015 0 1 0 39 32.787109 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 20.404297 A 1.50015 1.50015 0 0 0 7.4765625 18.882812 z M 25.123047 24.673828 C 25.720047 24.673828 26.289312 24.720453 26.820312 24.814453 C 26.536313 27.228453 25.404266 27.623594 24.322266 27.683594 C 23.580266 27.712594 22.892469 27.527203 22.480469 27.158203 C 22.229469 26.933203 22.093172 26.653172 22.076172 26.326172 C 22.038172 25.605172 22.639359 24.798359 24.443359 24.693359 C 24.673359 24.680359 24.900047 24.673828 25.123047 24.673828 z"/></svg>
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-gray-800">{chirp.user.name}</span>
                        <small className="ml-2 text-sm text-gray-600">{dayjs(chirp.created_at).fromNow()}</small>
                        { chirp.created_at !== chirp.updated_at && <small className="text-sm text-gray-600"> &middot; edited</small>}
                    </div>
                    {chirp.user.id === auth.user.id &&
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <button className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out" onClick={() => setEditing(true)}>
                                    Edit
                                </button>
                                <Dropdown.Link as="button" href={route('chirps.destroy', chirp.id)} method="delete" className="text-red-600 hover:bg-rose-100">
                                    Delete
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    }
                </div>
                {editing
                    ? <form onSubmit={submit}>
                        <textarea value={data.message} onChange={e => setData('message', e.target.value)} className="mt-4 w-full text-gray-900 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"></textarea>
                        <InputError message={errors.message} className="mt-2" />
                        <div className="space-x-2">
                            <PrimaryButton className="mt-4">Save</PrimaryButton>
                            <button className="mt-4" onClick={() => { setEditing(false); reset(); clearErrors(); }}>Cancel</button>
                        </div>
                    </form>
                    : <p className="mt-4 text-lg text-gray-900">{chirp.message}</p>
                }
            </div>
        </div>
    );
}