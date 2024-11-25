import printerModel from "../models/printerModel.js";

const addPrinter = async (req, res) => {
    try {
        const {
            PrinterID,
            performance,
            resources,
            available
        } = req.body;

        const printerData = {
            PrinterID,
            performance,
            resources,
            available
        }

        const printer = new printerModel(printerData)
        await printer.save();
        res.json({success:true,message:"Added Printer"});
    } catch (error) {
        res.json({success: false,message: error.message});
    }
}

const deletePrinter = async (req, res) => {
    try {
        await printerModel.deleteOne({ PrinterID: req.body.PrinterID })
        res.json({ success: true, message: "Deleted printer" });
    } catch (error) {
        res.json({success: false,message: error.message});
    }
}

const getAvaiblePrinter = async (req, res) => {
    try {
        const availablePrinters = await printerModel.find({ available: true });
        res.json({ success: true,availablePrinters });
    } catch (error) {
        res.json({success: false,message: error.message});
    }
}

const getAllPrinter = async (req, res) => {
    try {
        const printers = await printerModel.find({});
        res.json({ success: true, printers });
    } catch (error) {
        res.json({success: false,message: error.message});
    }
}

const updatePrinter = async (req, res) => {
    const { PrinterID, available } = req.body;

    try {
        // Tìm và cập nhật giá trị available của máy in
        const printer = await printerModel.findOneAndUpdate(
            { PrinterID },
            { available },
            { new: true }
        );

        // Kiểm tra nếu máy in không tồn tại
        if (!printer) {
            return res.status(404).json({ message: "Máy in không tồn tại" });
        }

        // Trả về thông tin máy in đã cập nhật
        res.status(200).json({ message: "Cập nhật thành công", printer });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Lỗi khi cập nhật máy in" });
    }
};

const sendMaintenance = async (req, res) => {
    const { PrinterID, performance } = req.body;

    try {
        // Tìm và cập nhật giá trị performance của máy in
        const printer = await printerModel.findOneAndUpdate(
            { PrinterID },
            { performance },
            { new: true }
        );

        // Kiểm tra nếu máy in không tồn tại
        if (!printer) {
            return res.status(404).json({ message: "Máy in không tồn tại" });
        }

        // Trả về thông tin máy in đã cập nhật
        res.status(200).json({ message: "Cập nhật thành công", printer });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Lỗi khi cập nhật máy in" });
    }
};

export {addPrinter,getAvaiblePrinter,getAllPrinter,updatePrinter,deletePrinter, sendMaintenance};