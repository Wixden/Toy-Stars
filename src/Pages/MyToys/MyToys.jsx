const MyToys = () => {
  return (
    <>
      <div className="relative w-full rounded-xl">
        <img
          src="{image}"
          className="w-full object-cover object-center md:h-72 h-52 rounded-xl"
        />
        <div className="absolute w-full h-full top-0 flex items-center bg-gradient-to-r from-[#000000] to-[rgba(21, 21, 21, 0)] rounded-lg">
          <h2 className="text-4xl font-bold text-white ml-24">Order List</h2>
        </div>
        <div className="absolute w-[296px] bottom-0 md:left-[40%] left-[10%] bg-primaryOrange text-center transform rounded-t-md">
          <p className="text-lg text-white p-2 font-medium">Home/Bookings</p>
        </div>
      </div>
      <div className="overflow-x-auto w-full my-20">
        <table className="table w-full">
          <tbody>
            {/* row 1 */}
            {/* {bookings.map((booking) => (
              <BookingItem
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleStatusChange={handleStatusChange}
              />
            ))} */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyToys;
