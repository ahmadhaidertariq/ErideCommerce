'use client';

import { useState } from 'react';
import { FiMessageCircle, FiX } from 'react-icons/fi';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 hover:scale-110"
        aria-label="Open chat"
      >
        {isOpen ? <FiX size={24} /> : <FiMessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
          <div className="bg-primary-600 text-white p-4 rounded-t-lg">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Chat with Us</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-primary-700 rounded p-1"
              >
                <FiX size={18} />
              </button>
            </div>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg p-3">
            <p className="text-sm text-gray-700">
              Hi! 👋 How can we help you grow your Amazon business today?
            </p>
          </div>
          <p className="text-xs text-gray-500 text-center">
            Type your message below or email us at{' '}
            <a
              href="mailto:info@eridecommerce.com"
              className="text-primary-600 hover:underline"
            >
              info@eridecommerce.com
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-gray-200 p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
            Send
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Responses typically within 24 hours
        </p>
      </div>
    </div>
      )}
    </>
  );
}






