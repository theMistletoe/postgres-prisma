import { Dialog, Transition } from "@headlessui/react";
import { Schedule } from "@prisma/client";
import { Fragment, useState } from "react";

export function ScheduleFormModal({date, isOpen, onClose, onScheduleCreate}: {date: Date, isOpen: boolean, onClose: () => void , onScheduleCreate: (createdSchedule: Schedule) => void}) {
    const [title, setTitle] = useState<string>('');
    const [startTime, setStartTime] = useState<string>('');
    const [endTime, setEndTime] = useState<string>('');

    async function handleSave() {
        const res = await fetch(`/api/schedule`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                startTime: new Date(date.getFullYear(), date.getMonth(), date.getDate(), parseInt(startTime.split(':')[0]), parseInt(startTime.split(':')[1])),
                endTime: new Date(date.getFullYear(), date.getMonth(), date.getDate(), parseInt(endTime.split(':')[0]), parseInt(endTime.split(':')[1])),
            }),
        });

        res.json().then((data) => {
            onScheduleCreate(data);
            onClose();
        });
    }

  return (
    <>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onClose}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title
                                as="h3"
                                className="text-lg font-medium leading-6 text-gray-900"
                            >
                                {`${date.toISOString().slice(0, 10)}の予定`}
                            </Dialog.Title>

                            <div className="mt-2">
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700">予定タイトル</label>
                                <input type="text" id="title" placeholder="予定タイトル" className="w-full p-2 border rounded-md" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className="mt-2">
                                <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">開始時刻</label>
                                <input type="text" id="startTime" placeholder="開始時刻" className="w-full p-2 border rounded-md" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                            </div>
                            <div className="mt-2">
                                <label htmlFor="endTime" className="block text-sm font-medium text-gray-700">終了時刻</label>
                                <input type="text" id="endTime" placeholder="終了時刻" className="w-full p-2 border rounded-md" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
                            </div>
                            <div className=" flex justify-between mt-4">
                                <button type="button" onClick={onClose} className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">閉じる</button>
                                <button onClick={handleSave} type="button" className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">保存</button>
                            </div>

                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
            </Dialog>
        </Transition>
    </>
    )
};