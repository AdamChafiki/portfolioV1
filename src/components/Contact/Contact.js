const Contact = () => {
    return (
      <section className="mt-20 container mx-auto py-3 px-3">
        <h1 className="text-center text-3xl md:text-5xl pl-3 font-medium text-slate-400">
          Contact
        </h1>
        <form className="flex justify-center mt-10">
          <div className="flex flex-col space-y-4 w-1/2">
            <label htmlFor="email" className="text-lg text-slate-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="border rounded-md py-2 px-3 text-slate-800"
              required
            />
            <label htmlFor="message" className="text-lg text-slate-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here"
              rows="4"
              className="border rounded-md py-2 px-3 text-slate-800 resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-slate-400 hover:bg-slate-500 text-white font-medium py-2 px-4 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    );
}
 
export default Contact;