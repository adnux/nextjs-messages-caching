import { redirect } from 'next/navigation';

import { addMessage } from '@/lib/messages';
import { revalidatePath, revalidateTag } from 'next/cache';

// const addNewMessage = async (message) => {
//     const { body } = await fetch('http://localhost:8080/messages', {
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       method: 'POST',
//       body: JSON.stringify({ message }),
//     });
//     console.log('Response:', body);
    
//     revalidatePath('/messages');
// };

export default function NewMessagePage() {
  async function createMessage(formData) {
    'use server';
    const message = formData.get('message');
    // await addNewMessage(message);
    addMessage(message);
    revalidateTag('messages');
    redirect('/messages');
  }

  return (
    <>
      <h2>New Message</h2>
      <form action={createMessage}>
        <p className="form-control">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" required rows="5" />
        </p>

        <p className="form-actions">
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
}
